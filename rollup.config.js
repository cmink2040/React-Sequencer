import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default [
	{
		input: [
        'src/index.ts',
		'src/components/AnimDiv.tsx', 
		'src/components/Sequencer.tsx',
		'src/other_comps/typer.tsx', 
		'src/components/TypeEffect.tsx'], // Entry point of your application
		output: {
			dir: 'dist', // Output file in the dist folder
			format: 'esm', // CommonJS format for Node.js
			sourcemap: true
		},
		external: ['react', 'react-dom'], // External dependencies, ignores react
		plugins: [
			resolve(), // Resolves node_modules dependencies
			commonjs(), // Converts CommonJS modules to ES6
			typescript({
				tsconfig: './tsconfig.json',
				sourceMap: true,
				inlineSources: true,
			  }),, // Transpile TypeScript and handle .tsx files
			terser() // Minify the output bundle (optional)
		] ,
	},
];
