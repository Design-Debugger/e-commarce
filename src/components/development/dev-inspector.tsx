'use client'

import React from 'react'
import { Inspector } from 'react-dev-inspector'

interface DevInspectorWrapperProps {
	children: React.ReactNode
}

/**
 * DevInspectorWrapper - Wraps the application with React Dev Inspector in development mode
 * 
 * This component enables click-to-source functionality in development, allowing developers
 * to click on any element in the browser and jump directly to its source code in the IDE.
 * 
 * Features:
 * - Only active in development mode (NODE_ENV === 'development')
 * - Hotkey activation: Ctrl + Shift + Command + C (Mac) or Ctrl + Shift + C (Windows/Linux)
 * - Works with popular IDEs: VS Code, WebStorm, Atom, Sublime Text, etc.
 * - Zero performance impact in production builds
 * 
 * Usage:
 * 1. Press the hotkey combination to activate inspector mode
 * 2. Click on any React component in the browser
 * 3. Your IDE will automatically open the corresponding source file
 * 
 * @param children - The child components to wrap
 * @returns JSX element wrapped with Inspector or Fragment based on environment
 */
function DevInspectorWrapper({ children }: DevInspectorWrapperProps): JSX.Element {
	// Only enable Inspector in development mode
	const InspectorComponent = process.env.NODE_ENV === 'development' ? Inspector : React.Fragment

	return (
		<InspectorComponent
			{...(process.env.NODE_ENV === 'development' && {
				// Configuration for React Dev Inspector
				keys: ['control', 'shift', 'command', 'c'], // Default hotkey for Mac
				disableLaunchEditor: false, // Allow launching editor
				onHoverElement: undefined, // Optional: customize hover behavior
				onClickElement: undefined, // Optional: customize click behavior
			})}
		>
			{children}
		</InspectorComponent>
	)
}

export default DevInspectorWrapper
