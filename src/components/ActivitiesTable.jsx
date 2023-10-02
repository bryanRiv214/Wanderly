import ActivityCard from "./ActivityCard";

const ActivitiesTable = () => {
    return (
        <table className="ActivitiesTable">
            {/* First row */}
            <tr>
                <ActivityCard />

                <ActivityCard />

                <ActivityCard />

                <ActivityCard />
            </tr>

            {/* Second row */}
            <tr>
                <ActivityCard />

                <ActivityCard />

                <ActivityCard />

                <ActivityCard />
            </tr>

            {/* Third row */}
            <tr>
                <ActivityCard />

                <ActivityCard />

                <ActivityCard />

                <ActivityCard />
            </tr>

            {/* Fourth row */}
            <tr>
                <ActivityCard />

                <ActivityCard />

                <ActivityCard />

                <ActivityCard />
            </tr>
        </table>
    )
}

export default ActivitiesTable;