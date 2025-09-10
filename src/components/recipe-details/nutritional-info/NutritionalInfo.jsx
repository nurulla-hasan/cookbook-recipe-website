import React from 'react';
import { Separator } from '@/components/ui/separator';

const NutritionalInfo = ({ nutritionalData, otherInfo }) => {
  return (
    <div className="border rounded-lg p-6">
      <h3 className="text-xl font-bold  mb-4">Nutritional Information</h3>
      <div className="space-y-3 ">
        {Object.entries(nutritionalData).map(([key, value], index) => (
          <React.Fragment key={key}>
            <div className="flex justify-between items-center">
              <span className="capitalize text-muted-foreground">{key}</span>
              <span className="text-xs text-muted-foreground">{value}</span>
            </div>
            {index < Object.keys(nutritionalData).length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>

      <h3 className="text-xl font-bold  mt-8 mb-4">Other Information</h3>
      <div className="space-y-3 ">
        {Object.entries(otherInfo).map(([key, value], index) => (
          <React.Fragment key={key}>
            <div className="flex justify-between items-center">
              <span className="capitalize text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-xs ">{value}</span>
            </div>
            {index < Object.keys(otherInfo).length - 1 && <Separator />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NutritionalInfo;
