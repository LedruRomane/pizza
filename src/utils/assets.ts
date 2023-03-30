
export default function assetsUrl(path: string) {
  const modules = import.meta.glob('../assets/images/**', { eager: true });
  const module = modules[`../assets/images/${path}`] as { default: string };

  return module.default;
}