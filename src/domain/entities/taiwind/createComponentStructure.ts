// Utils
import { normalizeComponentName } from "@utils/pathUtils"

// Types
import type { TemplateStructure } from "@domain/templates/types"

export type CreateComponentParams = { name: string }

export function createComponentStructureTailwind(
  params: CreateComponentParams
): TemplateStructure {
  const normalizedComponentName = normalizeComponentName(params.name)

  return {
    folderName: normalizedComponentName,
    folders: ["components"],
    files: [
      {
        path: "index.tsx",
        content: `// External Libraries
import clsx from 'clsx'
import type React from 'react'

// Types
import type { ${normalizedComponentName}Props } from './types'

export const ${normalizedComponentName}: React.FC<${normalizedComponentName}Props> = props => {
  return <div className={clsx('w-full flex')}></div>
}

`
      },
      {
        path: "types.ts",
        content: `export interface ${normalizedComponentName}Props {
  form: string
}

`
      }
    ]
  }
}