interface ILocationData {
  pathBeforeLogin?: string;
}

export const getCachedLocationData = () => {
  const loginData = localStorage.getItem('location');
  return loginData ? JSON.parse(loginData) : null;
};

export const setCachedLocationData = (locationData: ILocationData) => {
  locationData &&
    localStorage.setItem('location', JSON.stringify(locationData));
};

export const setPathBeforeLogin = (pathBeforeLogin: string) => {
  localStorage.setItem('location', JSON.stringify({ pathBeforeLogin }));
};
