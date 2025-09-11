import { Plus } from "lucide-react";

const DayView = ({ day }) => {
    return (
        <div>
            <h2 className="font-medium mb-4">
                {day}
            </h2>
            <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center space-y-2">
                <button className="border-2 border-dashed border-gray-300 rounded-md p-4">
                    <Plus />
                </button>
                <p className="text-gray-500">
                    Drag and drop a recipe here, or click to
                    add.
                </p>
                <p className="font-medium">
                    Add Recipe
                </p>
            </div>
        </div>
    );
};

export default DayView;