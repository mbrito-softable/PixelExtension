// Types
import { ProjectDefinition } from "./types";


export const PROJECTS: ProjectDefinition[] = [
    { id: 'lib', label: 'Project: Component Library', templates: [{ id: 'component', label: 'Component' }] },
    { id: 'tailwind', label: 'Project: Tailwind', templates: [{ id: 'component', label: 'Component' }] },
]