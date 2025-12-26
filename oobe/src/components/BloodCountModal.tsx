import { Modal, Table, Image } from "react-bootstrap";
import "./BloodCountModal.scss";
import { logo } from "../assets/images";
import type { LaboratoryReportData, PersonData } from "../pages/SmartClinical";
import { FormattedMessage } from "react-intl";

interface LaboratoryReportModalProps {
  show: boolean;
  onHide: () => void;
  reportData: LaboratoryReportData;
  patientData: PersonData;
}

const LaboratoryReportModal = ({
  show,
  onHide,
  reportData,
  patientData,
}: LaboratoryReportModalProps) => {
  if (!reportData) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      className="laboratory-report-modal"
    >
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title className="modal-title-custom">
          <Image src={logo} alt="SECO Logo" fluid className="logo" />
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-0">
        <div className="modal-content-custom">
          <div className="patient-info-section">
            <div className="section-header">
              <h3>
                <FormattedMessage
                  id="components.BloodCountMedical.patientInfo"
                  defaultMessage="Patient Information"
                />
              </h3>
            </div>
            <div className="patient-info-grid">
              <div className="patient-info-row">
                <span className="patient-info-label">
                  <FormattedMessage
                    id="components.BloodCountMedical.name"
                    defaultMessage="Name:"
                  />
                </span>
                <span className="patient-info-value">{patientData.name}</span>
              </div>
              <div className="patient-info-row">
                <span className="patient-info-label">
                  <FormattedMessage
                    id="components.BloodCountMedical.birthDate"
                    defaultMessage="Date of Birth:"
                  />
                </span>
                <span className="patient-info-value">
                  {new Date(patientData.birthDate).toLocaleDateString("en-GB")}
                </span>
              </div>
              <div className="patient-info-row">
                <span className="patient-info-label">
                  <FormattedMessage
                    id="components.BloodCountMedical.gender"
                    defaultMessage="Gender:"
                  />
                </span>
                <span className="patient-info-value">{patientData.gender}</span>
              </div>
              <div className="patient-info-row">
                <span className="patient-info-label">
                  <FormattedMessage
                    id="components.BloodCountMedical.patientID"
                    defaultMessage="Patient ID:"
                  />
                </span>
                <span className="patient-info-value">{patientData.id}</span>
              </div>
            </div>
          </div>

          <div className="lab-report-header">
            <div className="section-header">
              <h3>
                <FormattedMessage
                  id="components.BloodCountMedical.laboratoryReport"
                  defaultMessage="Laboratory Report"
                />
              </h3>
            </div>
            <div className="lab-report-details">
              <div className="lab-detail-row">
                <span className="lab-detail-label">
                  <FormattedMessage
                    id="components.BloodCountMedical.testType"
                    defaultMessage="Test Type:"
                  />
                </span>
                <span className="lab-detail-value">
                  {reportData.labReport.testType}
                </span>
              </div>
              <div className="lab-detail-row">
                <span className="lab-detail-label">
                  <FormattedMessage
                    id="components.BloodCountMedical.collectionDate"
                    defaultMessage="Collection Date:"
                  />
                </span>
                <span className="lab-detail-value">
                  {reportData.labReport.collectionDate}
                </span>
              </div>
              <div className="lab-detail-row">
                <span className="lab-detail-label">
                  <FormattedMessage
                    id="components.BloodCountMedical.reportDate"
                    defaultMessage="Report Date:"
                  />
                </span>
                <span className="lab-detail-value">
                  {reportData.labReport.reportDate}
                </span>
              </div>
            </div>
          </div>

          <div className="results-table-section">
            <Table responsive className="results-table">
              <thead>
                <tr>
                  <th>
                    <FormattedMessage
                      id="components.BloodCountMedical.test"
                      defaultMessage="Test"
                    />
                  </th>
                  <th>
                    <FormattedMessage
                      id="components.BloodCountMedical.result"
                      defaultMessage="Result"
                    />
                  </th>
                  <th>
                    <FormattedMessage
                      id="components.BloodCountMedical.unit"
                      defaultMessage="Unit"
                    />
                  </th>
                  <th>
                    <FormattedMessage
                      id="components.BloodCountMedical.referenceRange"
                      defaultMessage="Reference Range"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {reportData.testResults.map((test, index) => (
                  <tr key={index}>
                    <td>{test.testName}</td>
                    <td>{test.result}</td>
                    <td>{test.unit}</td>
                    <td>{test.referenceRange}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LaboratoryReportModal;
