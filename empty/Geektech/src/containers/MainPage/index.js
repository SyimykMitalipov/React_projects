import React, { useCallback, useEffect, useState } from "react";
import { actions as mainActions } from "../../states/actions";
import { useDispatch } from "react-redux";
import MainPageContent from "../../components/mainPageContent";

const MainPage = () => {
  const [isCool, setIsCool] = useState([]);

  const dispatch = useDispatch();

  const fetchIsCool = useCallback(async () => {
    try {
      const res = await dispatch(mainActions.getIsCool());
      setIsCool(res);
    } catch (e) {
      return null;
    }
  }, [dispatch]);

  useEffect(() => {
    fetchIsCool();
  }, [fetchIsCool]);

  return <MainPageContent isCool={isCool[0]}></MainPageContent>;
};

export default MainPage;
