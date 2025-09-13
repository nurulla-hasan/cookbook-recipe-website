import DayCard from "./DayCard";

const WeeklyMealPlan = ({ mealPlan }) => {
    return (
        <div className="space-y-8">
            {Object.keys(mealPlan).map((day) => (
                <DayCard key={day} day={day} meals={mealPlan[day]} />
            ))}
        </div>
    );
};

export default WeeklyMealPlan;