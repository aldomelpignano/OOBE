import { Row, Col } from "react-bootstrap";
import { FormattedMessage, useIntl } from "react-intl";
import { ImageData } from "types";

type StatsOverviewProps = {
  imagesData: ImageData[];
  imageIdsCount: number;
};

const StatItem = ({ label, val }: { label: string; val: string | number }) => (
  <Col className="text-center">
    <div
      style={{
        color: "#636e72",
        fontSize: "0.8rem",
        marginBottom: "15px",
        fontWeight: 400,
      }}
    >
      {label}
    </div>
    <h3
      style={{
        color: "#2d3436",
        fontSize: "1.6rem",
        fontWeight: 600,
        margin: 0,
      }}
    >
      {val}
    </h3>
  </Col>
);

const StatsOverview = ({ imagesData, imageIdsCount }: StatsOverviewProps) => {
  const intl = useIntl();
  const data = Array.isArray(imagesData) ? imagesData : [];
  const total = data.length;
  const ok = data.filter((i) => !i.drillError && !i.shortCircuit).length;
  const ko = data.filter((i) => i.drillError > 0 || i.shortCircuit > 0).length;
  const short = data.reduce((acc, c) => acc + (c.shortCircuit || 0), 0);
  const drill = data.reduce((acc, c) => acc + (c.drillError || 0), 0);
  const rate = total > 0 ? ((ok / total) * 100).toFixed(1) + "%" : "0.0%";

  return (
    <div className="mt-4 mb-5">
      <div className="mb-4">
        <h5 style={{ color: "#2d3436", fontWeight: 700, fontSize: "1rem" }}>
          <FormattedMessage
            id="stats.highestValuesRecordedTitle"
            defaultMessage="Highest Values Recorded"
          />
        </h5>
      </div>
      <Row className="py-2">
        <StatItem
          label={intl.formatMessage({
            id: "stats.totalPieces",
            defaultMessage: "Total Pieces",
          })}
          val={total}
        />
        <StatItem
          label={intl.formatMessage({
            id: "stats.qualityOk",
            defaultMessage: "Quality OK",
          })}
          val={ok}
        />
        <StatItem
          label={intl.formatMessage({
            id: "stats.qualityKo",
            defaultMessage: "Quality KO",
          })}
          val={ko}
        />
        <StatItem
          label={intl.formatMessage({
            id: "stats.shortCircuit",
            defaultMessage: "Short Circuit",
          })}
          val={short}
        />
        <StatItem
          label={intl.formatMessage({
            id: "stats.drillError",
            defaultMessage: "Drill Error",
          })}
          val={drill}
        />
        <StatItem
          label={intl.formatMessage({
            id: "stats.qualityRate",
            defaultMessage: "Quality Rate",
          })}
          val={rate}
        />
        <StatItem
          label={intl.formatMessage({
            id: "stats.uniqueImages",
            defaultMessage: "Unique Images",
          })}
          val={imageIdsCount}
        />
      </Row>
      <hr className="mt-5 opacity-25" />
    </div>
  );
};

export default StatsOverview;
