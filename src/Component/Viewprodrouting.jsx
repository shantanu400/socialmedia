import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Viewprodrouting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
}

export default Viewprodrouting