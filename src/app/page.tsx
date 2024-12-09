import { generateRandomV4 } from './generateRandomV4';

export default async function Home() {
  const [v4] = await generateRandomV4();

	return (
		<div>
			<h1>{v4}</h1>
		</div>
	);
}
