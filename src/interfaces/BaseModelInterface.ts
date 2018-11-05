import { ModelsInterface } from "./ModelsInterface";

export interface BaseModelInterface {
  prototype?
  assiciate?(models: ModelsInterface): void
}