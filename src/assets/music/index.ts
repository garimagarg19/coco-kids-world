// Audio assets loader using Vite's import.meta.glob
const audioModules = import.meta.glob<{ default: string }>('./*.mp3', { eager: true });

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
  oldMacdonald: findAudio('old macdonald'),
  ifHappy: findAudio('if you'),
  sweetDreams: findAudio('clouds are sleeping'),
};

export default AUDIO_ASSETS;
