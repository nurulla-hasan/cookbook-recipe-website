import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { StarRating } from '@/tools/StarRating';


const ScoreModal = ({ isOpen, onClose }) => {
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle review submission logic here
        console.log({ rating });
        onClose(false);
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
                    <Button type="submit" className="w-full">Submit</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ScoreModal;
