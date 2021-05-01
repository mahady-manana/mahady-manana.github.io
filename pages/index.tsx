import MainHeaders from '../components/commons/MainHeaders';
import { CustomSlider } from '../components/main';

export default function Home() {
  return (
    <>
      <MainHeaders
        title="Mahady Manana - Official website"
        description="Mahady Manana is a Malagasy Javascript Developer, Mahady Manana build a modern UI with Nodejs, Reactjs, Material UI, Javascript/Typescript."
      />
      <main className="main-content">
        <div>
          <CustomSlider />
        </div>
      </main>
    </>
  );
}
