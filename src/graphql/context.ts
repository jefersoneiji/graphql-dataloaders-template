import DataLoader from "dataloader";
import { NexusGenObjects } from "../../nexus-typegen";
import { authorLoader } from "./loaders";

export interface Context {
    authorLoader: DataLoader<number, NexusGenObjects['Author']>;
}

export const context: Context = {
    authorLoader
};