// src/components/AlertComponent.js
import React from "react";
import { Alert } from "../Style";

function AlertComponent({ alerts }) {
  return (
    <div>
      <h2>Real-Time Alerts</h2>
      {alerts.map((alert, index) => (
        <Alert key={index}>{alert.message}</Alert>
      ))}
    </div>
  );
}

export default AlertComponent;
