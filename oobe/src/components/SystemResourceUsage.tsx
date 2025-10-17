import React from "react";
import ReactApexChart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";
import { Card, Row, Col, Badge } from "react-bootstrap";
import "./SystemResourceUsage.scss";
import { FormattedMessage } from "react-intl";

const hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
const cpuData = [
  { x: 9, y: 22 },
  { x: 10.5, y: 37 },
  { x: 11.7, y: 21 },
  { x: 13.1, y: 40 },
  { x: 14.4, y: 25 },
  { x: 15.6, y: 33 },
  { x: 16.2, y: 31 },
  { x: 17.3, y: 29 },
  { x: 17.8, y: 24 },
  { x: 18.0, y: 28 },
];

const ramData = [
  { x: 9.1, y: 25 },
  { x: 10.4, y: 35 },
  { x: 11.8, y: 23 },
  { x: 13.0, y: 42 },
  { x: 14.6, y: 28 },
  { x: 15.2, y: 34 },
  { x: 16.4, y: 32 },
  { x: 17.1, y: 30 },
  { x: 17.6, y: 26 },
  { x: 18.0, y: 28 },
];

const realTimeUsage = "28%";

const baseChartOptions: ApexOptions = {
  chart: {
    type: "line",
    toolbar: { show: false },
    zoom: { enabled: false },
    background: "transparent",
  },
  stroke: { curve: "straight", width: 3 },
  grid: {
    borderColor: "gray",
    strokeDashArray: 0,
    xaxis: { lines: { show: true } },
    yaxis: { lines: { show: true } },
  },
  xaxis: {
    type: "numeric",
    min: Number(hours[0]),
    max: Number(hours[hours.length - 1]),
    tickAmount: hours.length - 1,
    labels: {
      formatter: (value) => {
        const idx = Math.round(Number(value)) - (hours.length - 1);
        return hours[idx] ?? "";
      },
      style: { colors: "#fff", fontSize: "12px" },
    },
    axisTicks: { show: false },
    axisBorder: { show: false },
  },
  yaxis: {
    min: 0,
    max: 100,
    tickAmount: 5,
    labels: {
      style: { colors: "#fff", fontSize: "12px" },
      formatter: (value) => `${value}%`,
    },
  },
  tooltip: { theme: "dark" },
  legend: { show: false },
  dataLabels: { enabled: false },
  markers: { size: 0 },
};

const SystemResourceUsage: React.FC = () => {
  const cpuSeries = [{ name: "CPU Usage", data: cpuData }];
  const ramSeries = [{ name: "RAM Usage", data: ramData }];

  return (
    <Card className="system-usage-card bg-dark rounded-5 border-secondary border-2">
      <Card.Body className="d-flex flex-column mt-2">
        <Card.Title className="fw-bold mb-4 fs-4 ms-3">
          <FormattedMessage
            id="components.SystemResourceUsage.title"
            defaultMessage="System resource usage"
          />
        </Card.Title>

        <div className="usage-section mt-5">
          <Row className="align-items-center justify-content-between mb-2">
            <Col xs="auto" className="ms-5">
              <span className="fw-semibold medium">
                <FormattedMessage
                  id="components.SystemResourceUsage.cpuUsage"
                  defaultMessage="CPU usage"
                />
              </span>
            </Col>
            <Col xs="auto" className="d-flex align-items-center gap-1 me-2">
              <Badge bg="" className="dot dot-cpu" />
              <small className="text-secondary">
                <FormattedMessage
                  id="components.SystemResourceUsage.realTimeUsage"
                  defaultMessage="real time usage: {usage}"
                  values={{ usage: realTimeUsage }}
                />
              </small>
            </Col>
          </Row>
          <ReactApexChart
            options={{ ...baseChartOptions, colors: ["#00FFAA"] }}
            series={cpuSeries}
            type="line"
            height={window.innerWidth < 576 ? 200 : 285}
          />
        </div>

        <div className="usage-section">
          <Row className="align-items-center justify-content-between mb-2">
            <Col xs="auto">
              <span className="fw-semibold medium ms-5">
                <FormattedMessage
                  id="components.SystemResourceUsage.ramUsage"
                  defaultMessage="RAM usage"
                />
              </span>
            </Col>
            <Col xs="auto" className="d-flex align-items-center gap-2 me-2">
              <Badge bg="" className="dot dot-ram" />
              <small className="text-secondary">
                <FormattedMessage
                  id="components.SystemResourceUsage.realTimeUsage"
                  defaultMessage="real time usage: {usage}"
                  values={{ usage: realTimeUsage }}
                />
              </small>
            </Col>
          </Row>
          <ReactApexChart
            options={{ ...baseChartOptions, colors: ["#007bff"] }}
            series={ramSeries}
            type="line"
            height={window.innerWidth < 576 ? 200 : 285}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SystemResourceUsage;
