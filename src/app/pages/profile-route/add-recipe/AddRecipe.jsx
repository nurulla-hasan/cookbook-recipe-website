
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { PlusCircle, Trash2 } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);
  const [nutritionalInfo, setNutritionalInfo] = useState([{ name: "", unit: "", percentage: "" }]);
  const [category, setCategory] = useState("");
  const [ethnic, setEthnic] = useState("");
  const [oils, setOils] = useState("oil-free");
  const [servingTemperature, setServingTemperature] = useState("cold");
  const [flavor, setFlavor] = useState("sweet");
  const [weightLossVsMuscleGain, setWeightLossVsMuscleGain] = useState("weight-loss");
  const [wholeFoodType, setWholeFoodType] = useState("plant-based");
  const [servingSize, setServingSize] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [recipeTips, setRecipeTips] = useState("");

  const handleAddField = (setter, state) => {
    setter([...state, ""]);
  };

  const handleRemoveField = (index, setter, state) => {
    const newState = [...state];
    newState.splice(index, 1);
    setter(newState);
  };

  const handleNutritionalChange = (index, field, value) => {
    const newInfo = [...nutritionalInfo];
    newInfo[index][field] = value;
    setNutritionalInfo(newInfo);
  };

  const addNutritionalField = () => {
    setNutritionalInfo([...nutritionalInfo, { name: "", unit: "", percentage: "" }]);
  }

  const handleSubmit = () => {
    const formData = {
      recipeName,
      ingredients,
      instructions,
      nutritionalInfo,
      category,
      ethnic,
      oils,
      servingTemperature,
      flavor,
      weightLossVsMuscleGain,
      wholeFoodType,
      servingSize,
      prepTime,
      recipeTips,
    };
    console.log(formData);
  };

  return (
    <div className="space-y-8">
      <Card className="py-6">
        <CardHeader>
          <CardTitle>Create Your Recipe</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="font-medium">Photos</Label>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 border-2 border-dashed rounded-lg flex items-center justify-center">
                <Button variant="outline" size="icon"><PlusCircle className="w-6 h-6" /></Button>
              </div>
              {/* Placeholder for uploaded images */}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="recipe-name" className="font-medium">Recipe Name</Label>
            <Input id="recipe-name" placeholder="Enter recipe name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label className="font-medium">Ingredients</Label>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={ingredient}
                  onChange={(e) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index] = e.target.value;
                    setIngredients(newIngredients);
                  }}
                  placeholder="e.g., 2 cups of flour"
                />
                <Button variant="outline" size="icon" onClick={() => handleRemoveField(index, setIngredients, ingredients)}>
                  <Trash2 className="w-5 h-5 text-destructive" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => handleAddField(setIngredients, ingredients)}>
              <PlusCircle className="w-4 h-4 mr-2" /> Add Ingredient
            </Button>
          </div>

          <div className="space-y-2">
            <Label className="font-medium">Instructions</Label>
            {instructions.map((instruction, index) => (
              <div key={index} className="flex items-center gap-2">
                <Textarea
                  value={instruction}
                  onChange={(e) => {
                    const newInstructions = [...instructions];
                    newInstructions[index] = e.target.value;
                    setInstructions(newInstructions);
                  }}
                  placeholder={`Step ${index + 1}`}
                />
                <Button variant="outline" size="icon" onClick={() => handleRemoveField(index, setInstructions, instructions)}>
                  <Trash2 className="w-5 h-5 text-destructive" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={() => handleAddField(setInstructions, instructions)}>
              <PlusCircle className="w-4 h-4 mr-2" /> Add Step
            </Button>
          </div>

          <div className="space-y-2">
            <Label className="font-medium">Nutritional Information</Label>
            <div className="space-y-2">
              {nutritionalInfo.map((info, index) => (
                <div key={index} className="flex justify-between gap-2 items-end *:grid *:gap-2">
                  <div className="w-full">
                    <Label htmlFor="name" className="font-medium">Name</Label>
                    <Input placeholder="e.g., Calories" value={info.name} onChange={(e) => handleNutritionalChange(index, 'name', e.target.value)} />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="unit" className="font-medium">Unit/gm</Label>
                    <Input placeholder="e.g., 200" value={info.unit} onChange={(e) => handleNutritionalChange(index, 'unit', e.target.value)} />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="percentage" className="font-medium">Percentage%</Label>
                    <Input placeholder="e.g., 30%" value={info.percentage} onChange={(e) => handleNutritionalChange(index, 'percentage', e.target.value)} />
                  </div>
                  <div>
                    <Button variant="outline" size="icon" onClick={() => handleRemoveField(index, setNutritionalInfo, nutritionalInfo)}>
                      <Trash2 className="w-5 h-5 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" onClick={addNutritionalField}>
              <PlusCircle className="w-4 h-4 mr-2" /> Add Nutrition Info
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="category" className="font-medium">Category</Label>
              <Select onValueChange={setCategory} value={category}>
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ethnic" className="font-medium">Ethnic/Holiday Recipes</Label>
              <Select onValueChange={setEthnic} value={ethnic}>
                <SelectTrigger id="ethnic" className="w-full">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="italian">Italian</SelectItem>
                  <SelectItem value="mexican">Mexican</SelectItem>
                  <SelectItem value="chinese">Chinese</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="christmas">Christmas</SelectItem>
                  <SelectItem value="thanksgiving">Thanksgiving</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-medium">Oils</Label>
            <RadioGroup value={oils} onValueChange={setOils} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="oil-free" id="oil-free" />
                <Label htmlFor="oil-free">Oil Free</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="with-oil" id="with-oil" />
                <Label htmlFor="with-oil">With Oil</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="font-medium">Serving Temperature</Label>
            <RadioGroup value={servingTemperature} onValueChange={setServingTemperature} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cold" id="cold" />
                <Label htmlFor="cold">Cold</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hot" id="hot" />
                <Label htmlFor="hot">Hot</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="font-medium">Flavor</Label>
            <RadioGroup value={flavor} onValueChange={setFlavor} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sweet" id="sweet" />
                <Label htmlFor="sweet">Sweet</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="savory" id="savory" />
                <Label htmlFor="savory">Savory</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="font-medium">Weight Loss vs. Muscle Gain</Label>
            <RadioGroup value={weightLossVsMuscleGain} onValueChange={setWeightLossVsMuscleGain} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weight-loss" id="weight-loss" />
                <Label htmlFor="weight-loss">Weight Loss</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="muscle-gain" id="muscle-gain" />
                <Label htmlFor="muscle-gain">Muscle Gain</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="font-medium">Whole Food Type</Label>
            <RadioGroup value={wholeFoodType} onValueChange={setWholeFoodType} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="plant-based" id="plant-based" />
                <Label htmlFor="plant-based">Plant Based</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="whole-food" id="whole-food" />
                <Label htmlFor="whole-food">Whole Food</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paleo" id="paleo" />
                <Label htmlFor="paleo">Paleo</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="serving-size" className="font-medium">Serving Size</Label>
              <Select onValueChange={setServingSize} value={servingSize}>
                <SelectTrigger id="serving-size" className="w-full">
                  <SelectValue placeholder="Enter your serving size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="prep-time" className="font-medium">Prep Time</Label>
              <Select onValueChange={setPrepTime} value={prepTime}>
                <SelectTrigger id="prep-time" className="w-full">
                  <SelectValue placeholder="Select your prepper time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15-mins">15 mins</SelectItem>
                  <SelectItem value="30-mins">30 mins</SelectItem>
                  <SelectItem value="45-mins">45 mins</SelectItem>
                  <SelectItem value="1-hour">1 hour</SelectItem>
                  <SelectItem value="1.5-hours">1.5 hours</SelectItem>
                  <SelectItem value="2-hours">2 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tips" className="font-medium">Recipe Tips</Label>
            <Textarea id="tips" placeholder="Enter your tips" value={recipeTips} onChange={(e) => setRecipeTips(e.target.value)} />
          </div>

          <Button size="lg" className="w-full" onClick={handleSubmit}>Save Recipe</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddRecipe;
