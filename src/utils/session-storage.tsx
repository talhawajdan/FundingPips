export function getSessionStorage(key: string): string | null {
  let data: string | null = null;
  try {
    data = typeof window !== "undefined" ? sessionStorage.getItem(key) : null;
    if (data) {
      data = JSON.parse(data);
    }
  } catch (error) {
     console.log(error)
    // If stored data is not a stringified JSON this might fail,
    // that's why we catch the error
  }
  return data;
}

export function setSessionStorage(key: string, data:any): void {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    typeof window !== "undefined" &&
      sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error)
    /* empty */
  }
}

export function removeSessionStorage(key: string): void {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    typeof window !== "undefined" && sessionStorage.removeItem(key);
  } catch (error) {
     console.log(error)
    // If stored data is not a stringified JSON this might fail,
    // that's why we catch the error
  }
}

export function clearSessionStorage(): void {
  sessionStorage.clear();
}
