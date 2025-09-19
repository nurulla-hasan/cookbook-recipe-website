import PlanTypeFilter from "./PlanTypeFilter";

const GlobalMenu = ({
    preparations,
    selectedPreparation,
    setSelectedPreparation,
}) => {

    return (
        <div className="flex items-center gap-4">
            <PlanTypeFilter
                title="Preparation"
                items={preparations}
                value={selectedPreparation}
                onValueChange={setSelectedPreparation}
            />
        </div>
    );
};

export default GlobalMenu;