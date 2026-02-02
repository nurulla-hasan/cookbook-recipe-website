import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef, useEffect } from "react";
import { PlusCircle, Trash2, UploadCloud } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { useUpdateRecipeMutation } from "@/redux/feature/recipe/recipeApi";
import { ErrorToast, SuccessToast } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const recipeSchema = z.object({
  name: z.string().min(1, "Recipe name is required."),
  ingredients: z.array(z.object({ value: z.string().min(1, "Ingredient cannot be empty.") })).min(1, "At least one ingredient is required."),
  instructions: z.string().min(1, "Instructions are required."),
  nutritional: z.object({
    calories: z.coerce.number({ invalid_type_error: "Calories are required." }).min(1, "Calories must be at least 1."),
    protein: z.coerce.number({ invalid_type_error: "Protein is required." }).min(1, "Protein must be at least 1."),
    carbs: z.coerce.number({ invalid_type_error: "Carbs are required." }).min(1, "Carbs must be at least 1."),
    fat: z.coerce.number({ invalid_type_error: "Fat is required." }).min(1, "Fat must be at least 1."),
    fiber: z.coerce.number({ invalid_type_error: "Fiber is required." }).min(1, "Fiber must be at least 1."),
  }),
  category: z.string().min(1, "Category is required."),
  holiday_recipes: z.string().min(1, "Holiday recipe type is required."),
  oils: z.string().min(1, "Oils selection is required."),
  serving_temperature: z.string().min(1, "Serving temperature is required."),
  flavor: z.string().min(1, "Flavor is required."),
  weight_and_muscle: z.string().min(1, "Weight & muscle selection is required."),
  whole_food_type: z.string().min(1, "Whole food type is required."),
  serving_size: z.coerce.number({ invalid_type_error: "Serving size is required." }).min(1, "Serving size must be at least 1."),
  prep_time: z.coerce.number({ invalid_type_error: "Prep time is required." }).min(1, "Prep time must be at least 1."),
  recipe_tips: z.string().min(1, "Recipe tips are required."),
  kid_approved: z.boolean(),
  no_weekend_prep: z.boolean(),
  prep: z.string().min(1, "Prep details are required."),
  image: z.any().optional(),
});

const EditRecipe = () => {
  const location = useLocation();
  const recipe = location.state?.recipe;
  const [imagePreview, setImagePreview] = useState(recipe?.image || null);
  const fileInputRef = useRef(null);
  const [updateRecipe, { isLoading }] = useUpdateRecipeMutation();

  const form = useForm({
    resolver: zodResolver(recipeSchema),
    defaultValues: {
      name: "",
      ingredients: [{ value: "" }],
      instructions: "",
      nutritional: { calories: "", protein: "", carbs: "", fat: "", fiber: "" },
      category: "",
      holiday_recipes: "",
      oils: "",
      serving_temperature: "",
      flavor: "",
      weight_and_muscle: "",
      whole_food_type: "",
      serving_size: "",
      prep_time: "",
      recipe_tips: "",
      kid_approved: false,
      no_weekend_prep: false,
      prep: "",
      image: null,
    },
  });

  useEffect(() => {
    if (recipe) {
      form.reset({
        ...recipe,
        ingredients: recipe.ingredients.map(ing => ({ value: ing })),
        nutritional: {
          calories: String(recipe.nutritional.calories),
          protein: String(recipe.nutritional.protein),
          carbs: String(recipe.nutritional.carbs),
          fat: String(recipe.nutritional.fat),
          fiber: String(recipe.nutritional.fiber),
        },
        serving_size: String(recipe.serving_size),
        prep_time: String(recipe.prep_time),
        kid_approved: recipe?.kid_approved ?? false,
        no_weekend_prep: recipe?.no_weekend_prep ?? false,
        image: recipe.image || null,
      });
      setImagePreview(recipe.image || null);
    }
  }, [recipe, form]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "ingredients",
  });

  const onSubmit = async (values) => {
    const formData = new FormData();
    const newValues = {
      ...values,
      ingredients: values.ingredients.map(item => item.value)
    };

    Object.entries(newValues).forEach(([key, value]) => {
      if (key === 'image') {
        if (value instanceof File) {
          formData.append(key, value);
        }
      } else if (typeof value === 'object' && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    try {
      await updateRecipe({ id: recipe._id, data: formData }).unwrap();
      SuccessToast("Recipe updated successfully.");
    } catch (error) {
      console.log(error)
      ErrorToast(error?.data?.message || "Failed to update recipe.");
    }
  }

  const handleFileDrop = (e, field) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      field.onChange(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Card className="py-6">
      <CardHeader>
        <CardTitle>Edit Your Recipe</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Photos</FormLabel>
                  <FormControl>
                    <div
                      className="w-full md:w-96 aspect-video border-2 border-dashed rounded-lg flex items-center justify-center text-center cursor-pointer hover:border-gray-400 transition-colors relative"
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => handleFileDrop(e, field)}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/png, image/jpeg, image/gif"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            field.onChange(file);
                            setImagePreview(URL.createObjectURL(file));
                          }
                        }}
                      />
                      {imagePreview ? (
                        <>
                          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8 z-10"
                            onClick={(e) => {
                              e.stopPropagation();
                              field.onChange(null);
                              setImagePreview(null);
                              if (fileInputRef.current) fileInputRef.current.value = "";
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <div className="flex flex-col items-center text-muted-foreground">
                          <UploadCloud className="w-12 h-12" />
                          <p className="mt-2 text-sm">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs">PNG, JPG, GIF up to 5MB</p>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipe Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter recipe name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Label>Ingredients</Label>
              <div className="space-y-2 mt-2">
                {fields.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <FormField
                      control={form.control}
                      name={`ingredients.${index}.value`}
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input placeholder="e.g., 2 cups of flour" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="button" variant="outline" size="icon" onClick={() => remove(index)}>
                      <Trash2 className="w-5 h-5 text-destructive" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button type="button" variant="outline" size="sm" className="mt-2" onClick={() => append({ value: "" })}>
                <PlusCircle className="w-4 h-4 mr-2" /> Add Ingredient
              </Button>
            </div>

            <FormField
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instructions</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter recipe instructions" rows={6} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Label>Nutritional Information</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-2">
                <FormField
                  control={form.control}
                  name="nutritional.calories"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Calories</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 250" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nutritional.protein"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Protein (g)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nutritional.carbs"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Carbs (g)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 30" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nutritional.fat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fat (g)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nutritional.fiber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fiber (g)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 7" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select key={String(field.value ?? '')} onValueChange={field.onChange} value={field.value ?? undefined}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="breakfast">Breakfast</SelectItem>
                        <SelectItem value="lunches-and-dinners">Lunch & Dinner</SelectItem>
                        <SelectItem value="appetizers">Appetizers</SelectItem>
                        <SelectItem value="salads">Salads</SelectItem>
                        <SelectItem value="soups">Soups</SelectItem>
                        <SelectItem value="desserts">Desserts</SelectItem>
                        <SelectItem value="smoothies/shakes">Smoothies/Shakes</SelectItem>
                        <SelectItem value="salad-dressings">Salad Dressings</SelectItem>
                        <SelectItem value="jams/marmalades">Jams/Marmalades</SelectItem>
                        <SelectItem value="sides">Sides</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="holiday_recipes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ethnic/Holiday Recipes</FormLabel>
                    <Select key={String(field.value ?? '')}onValueChange={field.onChange} value={field.value ?? undefined}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Chinese">Chinese</SelectItem>
                        <SelectItem value="Japanese">Japanese</SelectItem>
                        <SelectItem value="French">French</SelectItem>
                        <SelectItem value="Greek">Greek</SelectItem>
                        <SelectItem value="Italian">Italian</SelectItem>
                        <SelectItem value="Mexican">Mexican</SelectItem>
                        <SelectItem value="Indian">Indian</SelectItem>
                        <SelectItem value="Arabic">Arabic</SelectItem>
                        <SelectItem value="Thai">Thai</SelectItem>
                        <SelectItem value="Southern Comfort">Southern Comfort</SelectItem>
                        <SelectItem value="Backyard BBQ">Backyard BBQ</SelectItem>
                        <SelectItem value="Christmas">Christmas</SelectItem>
                        <SelectItem value="Thanksgiving">Thanksgiving</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="oils"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Oils</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value ?? ""} className="flex gap-4">
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="oil_free" />
                        </FormControl>
                        <FormLabel className="font-normal">Oil Free</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="with_oil" />
                        </FormControl>
                        <FormLabel className="font-normal">With Oil</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serving_temperature"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Serving Temperature</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value ?? ""} className="flex gap-4">
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="Cold" />
                        </FormControl>
                        <FormLabel className="font-normal">Cold</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="Hot" />
                        </FormControl>
                        <FormLabel className="font-normal">Hot</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="flavor"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Flavor</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value ?? ""} className="flex gap-4">
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="Sweet" />
                        </FormControl>
                        <FormLabel className="font-normal">Sweet</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="Savory" />
                        </FormControl>
                        <FormLabel className="font-normal">Savory</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight_and_muscle"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Weight & Muscle</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value ?? ""} className="flex gap-4">
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="weight_loss" />
                        </FormControl>
                        <FormLabel className="font-normal">Weight Loss</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="muscle_gain" />
                        </FormControl>
                        <FormLabel className="font-normal">Muscle Gain</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="maintain_weight" />
                        </FormControl>
                        <FormLabel className="font-normal">Maintain Weight</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whole_food_type"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Whole Food Type</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value ?? ""} className="flex gap-4">
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="plant_based" />
                        </FormControl>
                        <FormLabel className="font-normal">Plant Based</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="whole_food" />
                        </FormControl>
                        <FormLabel className="font-normal">Whole Food</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="paleo" />
                        </FormControl>
                        <FormLabel className="font-normal">Paleo</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="serving_size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Serving Size</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your serving size" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="prep_time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prep Time (in minutes)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 45" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="recipe_tips"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipe Tips</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your tips" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="prep"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prep</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter prep details" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="kid_approved"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Kid Approved</FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value ? "true" : "false"}
                      onValueChange={(v) => field.onChange(v === "true")}
                      className="flex gap-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="false" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="no_weekend_prep"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>No Weekend Prep</FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value ? "true" : "false"}
                      onValueChange={(v) => field.onChange(v === "true")}
                      className="flex gap-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="false" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button loading={isLoading} type="submit" size="lg" className="w-full">Update Recipe</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default EditRecipe;
