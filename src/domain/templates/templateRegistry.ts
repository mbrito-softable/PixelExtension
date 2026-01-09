// Entities
import { createComponentStructureLib } from '@domain/entities/lib/createComponentStructure'
import { createComponentStructureTailwind } from '@domain/entities/taiwind/createComponentStructure'

// Types
import { TemplateStructure } from './types'
import { ProjectId } from '@domain/projects/types'


export type TemplateId = 'component'

export type RunTemplateParams = {
  name: string
}

export function runTemplate(
  projectId: ProjectId,
  templateId: TemplateId,
  params: RunTemplateParams
): TemplateStructure {
  if (templateId === 'component') {
    if (projectId === 'lib') return createComponentStructureLib(params)
    if (projectId === 'tailwind') return createComponentStructureTailwind(params)
  }

  throw new Error(`Unknown template: ${templateId}`)
}