import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogClose,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full h-auto">
        <DialogHeader>
          <DialogClose asChild>
            <button className="absolute top-2 right-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200">
              <X className="h-6 w-6" />
            </button>
          </DialogClose>
        </DialogHeader>
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={videoSrc}
            title="video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
