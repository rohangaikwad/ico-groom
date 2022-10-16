import { IIconType, ISelectedType } from "./Interfaces";

export class Selected implements ISelectedType {
    solid6: IIconType[];
    sharpSolid6: IIconType[];
    regular6: IIconType[];
    light6: IIconType[];
    thin6: IIconType[];
    brands6: IIconType[];
    duotone6: IIconType[];
    fa47: IIconType[]

    
  constructor(solid6 = [], sharpSolid6 = [], regular6 = [], light6 = [], thin6 = [], brands6 = [], duotone6 = [], fa47 = []) {
    this.solid6 = solid6;
    this.sharpSolid6 = sharpSolid6;
    this.regular6 = regular6;
    this.light6 = light6;
    this.thin6 = thin6;
    this.brands6 = brands6;
    this.duotone6 = duotone6;
    this.fa47 = fa47;
  }
}