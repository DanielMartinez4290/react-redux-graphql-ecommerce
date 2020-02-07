export const ALL     = 'ALL'; 
export const GIBSON  = 'GIBSON'; 
export const FENDER  = 'FENDER';
export const SORTLOW = 'SORTLOW';
export const SORTHIGH = 'SORTHIGH';

export const allCategory = () => ({
    type: ALL
});
  
export  const gibsonCategory = () => ({
    type: GIBSON
});
  
export const fenderCategory = () => ({
    type: FENDER
});

export const sortLow = () => ({
  type: SORTLOW
});

export const sortHigh = () => ({
  type: SORTHIGH
});