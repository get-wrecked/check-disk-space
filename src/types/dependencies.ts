import { access } from 'fs/promises'
import { normalize, sep } from 'path'

type Dependencies = {
	platform: NodeJS.Platform
	release: string
	fsAccess: typeof access
	pathNormalize: typeof normalize
	pathSep: typeof sep
	cpExecFile: (
		file: string,
		args: ReadonlyArray<string> | undefined | null,
		options: {
			windowsHide: true
		}
	) => Promise<{
		stdout: string
		stderr: string
	}>
}

export default Dependencies
