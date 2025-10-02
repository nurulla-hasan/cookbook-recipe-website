import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { StarRating } from '@/tools/StarRating';
import { useSendSatietyReviewMutation } from '@/redux/feature/recipe/recipeApi';
import { ErrorToast } from '@/lib/utils';


const ScoreModal = ({ isOpen, onClose, recipe }) => {
    const [rating, setRating] = useState(0);

    const [sendScore, { isLoading }] = useSendSatietyReviewMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendScore({
                recipeId: recipe._id,
                ratting: rating
            }).unwrap();
            setRating(0);
            onClose(false);
        } catch (error) {
            console.error('Review submission failed:', error);
            ErrorToast(error?.data?.message || 'Failed to send review');
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-xl text-center">Satiety Score</DialogTitle>
                    <DialogDescription className="sr-only">
                        Satiety Score
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid justify-items-center">
                        <StarRating
                            gap={4}
                            size={22}
                            rating={rating}
                            onRate={setRating} />
                    </div>
                    <Button loading={isLoading} type="submit" className="w-full">Submit</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ScoreModal;
