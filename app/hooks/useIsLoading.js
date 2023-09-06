const useIsLoading = (bool) => {
  if (window !== "undefined") {
    localStorage.setItem("isLoading", bool);
    window.dispatchEvent(new Event("storage"));
  }
};

export default useIsLoading;
