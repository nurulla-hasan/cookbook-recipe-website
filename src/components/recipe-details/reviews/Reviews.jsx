import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/lib/utils";
import { ArrowDown, Plus } from "lucide-react";

const Reviews = ({ recipe }) => {
    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-lg font-medium mb-4">Review & Rating</h3>
                <div className="border rounded-lg p-6 flex flex-col items-center gap-2">
                    <div className="text-5xl font-bold">{recipe.rating}</div>
                    <StarRating rating={recipe.rating} />
                    <div className="text-muted-foreground">({recipe.reviews} Overall Rating)</div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-medium mb-4">All Review & Rating</h3>
                <div className="space-y-6">
                    {recipe.reviewsData.map((review) => (
                        <div key={review.id} className="border rounded-lg p-6">
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage src={review.avatar} />
                                    <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="font-medium">{review.user}</div>
                                            <div className="text-sm text-muted-foreground">{review.date}</div>
                                        </div>
                                        <StarRating rating={review.rating} />
                                    </div>
                                    <p className="mt-4 text-muted-foreground">{review.comment}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <Button
                    variant="outline">
                    <ArrowDown />
                    See More
                </Button>
            </div>

            <Button
                variant="outline"
                className="w-full py-6"
            >
                <Plus />
                Add Review
            </Button>
        </div>
    );
};

export default Reviews;