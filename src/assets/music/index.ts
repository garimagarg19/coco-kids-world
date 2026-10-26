// Audio assets loader using Vite's import.meta.glob
const audioModules = import.meta.glob<{ default: string }>(['./*.mp3', './*.mpeg'], { eager: true });

function findAudio(keyword: string): string | undefined {
  const matchKey = Object.keys(audioModules).find((path) =>
    path.toLowerCase().includes(keyword.toLowerCase())
  );
  return matchKey ? audioModules[matchKey]?.default : undefined;
}

export const AUDIO_ASSETS = {
  twinkle: findAudio('twinkle twinkle'),
  wheels: findAudio('wheels on the bus'),
  bunnyHop: findAudio('put your hands in the air'),
  handsInAir: findAudio('put your hands in the air'),
  oldMacdonald: findAudio('old macdonald'),
  ifHappy: findAudio('if you'),
  sweetDreams: findAudio('clouds are sleeping'),
  // Animal sounds (.mpeg)
  lion: findAudio('lion_sound'),
  bird: findAudio('birds_sound'),
  birds: findAudio('birds_sound'),
  monkey: findAudio('monkey_sound'),
  bunny: findAudio('rabbit_sound'),
  rabbit: findAudio('rabbit_sound'),
  elephant: findAudio('elephant_sound'),
  cat: findAudio('cat_sound'),
  dog: findAudio('dog_sound'),
  duck: findAudio('duck_sound'),
  cow: findAudio('cow_sound'),
  frog: findAudio('frog_sound'),
};

export const ANIMAL_AUDIO_ASSETS: Record<string, string | undefined> = {
  lion: findAudio('lion_sound'),
  bird: findAudio('birds_sound'),
  monkey: findAudio('monkey_sound'),
  bunny: findAudio('rabbit_sound'),
  rabbit: findAudio('rabbit_sound'),
  elephant: findAudio('elephant_sound'),
  cat: findAudio('cat_sound'),
  dog: findAudio('dog_sound'),
  duck: findAudio('duck_sound'),
  cow: findAudio('cow_sound'),
  frog: findAudio('frog_sound'),
};

export default AUDIO_ASSETS;

