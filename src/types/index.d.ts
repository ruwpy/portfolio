export interface IProject {
  id: number;
  name: string;
  image: string;
  description: string;
  link?: string;
  whatBuilt: string;
  isDeployed: boolean;
}

export interface IService {
  id: number;
  title: string;
  desc: string;
}
