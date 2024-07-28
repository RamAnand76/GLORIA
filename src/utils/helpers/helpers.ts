import PATH from '@/routes/paths';

export const createNavItem = (name: string) => {
  return {
    name,
    url: PATH[name],
    icon: name.toLowerCase(), // Or keep it the same as name, if required
  };
};
