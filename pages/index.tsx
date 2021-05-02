import MainHeaders from '../components/commons/MainHeaders';
import {
  CustomSlider,
  Presentation,
} from '../components/main/homepage';

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
        <div>
          <Presentation />
        </div>
      </main>
    </>
  );
}
