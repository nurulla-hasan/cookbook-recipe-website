import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Star } from 'lucide-react';
import FilterDropdown from '../filter-dropdown/FilterDropdown';

const FilterModal = ({ isOpen, onClose, onApplyFilters, onClearFilters }) => {
  // State for filters
  const [mealType, setMealType] = useState('');
  const [intermittentFasting, setIntermittentFasting] = useState('');
  const [oils, setOils] = useState('');
  const [weightLossMuscleGain, setWeightLossMuscleGain] = useState('');
  const [wholeFoodType, setWholeFoodType] = useState('');
  const [flavorType, setFlavorType] = useState('');
  const [cuisineProfiles, setCuisineProfiles] = useState('');

  const [serving, setServing] = useState([2, 4]); // Default range
  const [preparationTime, setPreparationTime] = useState([5, 20]); // Default range
  const [rating, setRating] = useState(0); // 0 means no rating selected

  // Mock options for dropdowns (these would typically come from an API or constants)
  const mealTypeOptions = ['Appetizers', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Salad', 'Snacks', 'Smoothies'];
  const intermittentFastingOptions = ['Cold', 'Hot'];
  const oilsOptions = ['Oil Free', 'With Oil'];
  const weightLossMuscleGainOptions = ['Weight loss', 'Muscle gain'];
  const wholeFoodTypeOptions = ['Plant based', 'Whole food', 'Paleo'];
  const flavorTypeOptions = ['Sweet', 'Savory'];
  const cuisineProfilesOptions = ['African', 'American', 'Asian', 'Chinese', 'Cuban', 'East African'];


  const handleApply = () => {
    const filters = {
      mealType,
      intermittentFasting,
      oils,
      weightLossMuscleGain,
      wholeFoodType,
      flavorType,
      cuisineProfiles,
      serving,
      preparationTime,
      rating,
    };
    onApplyFilters(filters);
    onClose();
  };

  const handleClear = () => {
    setMealType('');
    setIntermittentFasting('');
    setOils('');
    setWeightLossMuscleGain('');
    setWholeFoodType('');
    setFlavorType('');
    setCuisineProfiles('');
    setServing([2, 4]);
    setPreparationTime([5, 20]);
    setRating(0);
    onClearFilters(); // Notify parent to clear filters
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[600px] bg-secondary p-6 rounded-lg shadow-lg">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-bold text-center">Filter By Ingredients & More</DialogTitle>
          <DialogDescription className="sr-only">
            Select your preferred filters to narrow down your search.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Filter Categories */}
          <div className="space-y-3">
            <FilterDropdown label="Meal Type" options={mealTypeOptions} selected={mealType} onSelect={setMealType} />
            <FilterDropdown label="Intermittent Fasting" options={intermittentFastingOptions} selected={intermittentFasting} onSelect={setIntermittentFasting} />
            <FilterDropdown label="Oils" options={oilsOptions} selected={oils} onSelect={setOils} />
            <FilterDropdown label="Weight Loss vs. Muscle Gain" options={weightLossMuscleGainOptions} selected={weightLossMuscleGain} onSelect={setWeightLossMuscleGain} />
            <FilterDropdown label="Whole Food Type" options={wholeFoodTypeOptions} selected={wholeFoodType} onSelect={setWholeFoodType} />
            <FilterDropdown label="Flavor Type" options={flavorTypeOptions} selected={flavorType} onSelect={setFlavorType} />
            <FilterDropdown label="Cuisine Profiles" options={cuisineProfilesOptions} selected={cuisineProfiles} onSelect={setCuisineProfiles} />
          </div>

          {/* Serving Slider */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="font-medium">Serving</label>
              <span className="text-sm">Set Manually</span>
            </div>
            <Slider
              min={1}
              max={10}
              step={1}
              value={serving}
              onValueChange={setServing}
              className="w-full [&>span:first-child]:bg-white [&>span:first-child]:text-primary"
            />
            <div className="flex justify-between text-sm mt-1">
              <span>{serving[0]}</span>
              <span>{serving[1]}</span>
            </div>
          </div>

          {/* Preparation Time Slider */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="font-medium">Preparation Time</label>
              <span className="text-sm">Set Manually</span>
            </div>
            <Slider
              min={5}
              max={120}
              step={5}
              value={preparationTime}
              onValueChange={setPreparationTime}
              className="w-full [&>span:first-child]:bg-white [&>span:first-child]:text-primary"
            />
            <div className="flex justify-between text-sm mt-1">
              <span>{preparationTime[0]} mins</span>
              <span>{preparationTime[1]} mins</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <label className="font-medium">Rating</label>
              <span className="text-sm">All</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 cursor-pointer ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-primary'}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <Button onClick={handleApply} className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-md">
            SHOW RECIPES
          </Button>
          <Button onClick={handleClear} variant="outline" className="w-full border-primary  hover:bg-primary/10 py-2 rounded-md">
            Clear All Filters
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
