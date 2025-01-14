import React, { ReactElement } from 'react';
import { ColourCoding } from '../../pages/products';

type WorksWithSectionProps = {
  label: string;
  children: ReactElement[];
  colourCoding: ColourCoding;
};

const WorksWithSection = (props: WorksWithSectionProps) => (
  <div className="works-with__section">
    <div
      className={`works-with__section-label works-with__section-label--${props.colourCoding}`}
    >
      {props.label}
    </div>
    <div className="works-with__section-logos">{props.children}</div>
  </div>
);

export default WorksWithSection;
