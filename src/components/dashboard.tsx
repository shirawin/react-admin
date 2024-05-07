// in src/components/dashbord.tsx
import { Card, CardContent, CardHeader } from "@mui/material";

export const Dashboard = () => {
    // Define the number of cards in each row
    const cardsPerRow = [3,3,3];

    // Calculate the width percentage for each card based on the number of cards per row
    const cardWidthPercentage = 80 / Math.max(...cardsPerRow);

    // Generate the JSX for cards
    const generateCards = (count: number) => {
        const cards = [];
        for (let i = 0; i < count; i++) {
            cards.push(
                <div key={i} style={{ margin: "10px", width: `${cardWidthPercentage}%` }}>
                    <Card>
                        <CardHeader title="Welcome to the github administration" />
                        <CardContent>
                            <p>The page is under construction⚒️</p>
                            <p>There is something to look forward to..😏</p>
                        </CardContent>
                    </Card>
                </div>
            );
        }
        return cards;
    };

    return (
        <>
            {cardsPerRow.map((count, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "center" }}>
                    {generateCards(count)}
                </div>
            ))}
        </>
    );
};
