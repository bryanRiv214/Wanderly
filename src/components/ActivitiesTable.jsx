import ActivityCard from "./ActivityCard";
import "../styles/ActivitiesTable.css";

const ActivitiesTable = () => {
    return (
        <table className="ActivitiesTable">
            <tbody>
                {/* First row */}
                <tr>
                    <ActivityCard />

                    <ActivityCard />
                </tr>

                {/* Second row */}
                <tr>
                    <ActivityCard />

                    <ActivityCard />
                </tr>

                {/* Third row */}
                <tr>
                    <ActivityCard />

                    <ActivityCard />
                </tr>

                {/* Fourth row */}
                <tr>
                    <ActivityCard />

                    <ActivityCard />
                </tr>
            </tbody>
        </table>
    )
}

export default ActivitiesTable;