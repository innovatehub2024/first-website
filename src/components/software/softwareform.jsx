import React, { useState } from 'react';
import './softwareform.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SoftwareForm = () => {
  const [appType, setAppType] = useState('');
  const [complexity, setComplexity] = useState('basic');
  const [description, setDescription] = useState('');
  const [projectObjective, setProjectObjective] = useState('');
  const [targetUsers, setTargetUsers] = useState('');
  const [platformPreferences, setPlatformPreferences] = useState('');
  const [performance, setPerformance] = useState('');
  const [security, setSecurity] = useState('');
  const [budget, setBudget] = useState(1000);
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      appType,
      complexity,
      description,
      projectObjective,
      targetUsers,
      platformPreferences,
      performance,
      security,
      budget,
      startDate,
    };
    console.log(formData);
    alert('Form submitted! Check the console for details.');
  };

  return (
    <section className='formbg'>
    <div className="form-container">
      <h2>Project Development Details</h2>
      <form onSubmit={handleSubmit} className="software-form">
        {/* App Type Selection */}
        <div className="form-group">
          <label>Application Type</label>
          <div className="radio-group">
            <label className="radio-label">
              <input 
                type="radio" 
                value="mobile" 
                checked={appType === 'mobile'} 
                onChange={(e) => setAppType(e.target.value)} 
              />
              Mobile Application
            </label>
            <label className="radio-label">
              <input 
                type="radio" 
                value="web" 
                checked={appType === 'web'} 
                onChange={(e) => setAppType(e.target.value)} 
              />
              Web Application
            </label>
          </div>
        </div>

        {/* Complexity Level */}
        <div className="form-group">
          <label>Complexity Level</label>
          <select 
            value={complexity} 
            onChange={(e) => setComplexity(e.target.value)} 
            className="styled-select"
          >
            <option value="basic">Basic</option>
            <option value="medium">Medium</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Project Objective */}
        <div className="form-group">
          <label>Project Objective</label>
          <textarea 
            rows="4" 
            value={projectObjective} 
            onChange={(e) => setProjectObjective(e.target.value)} 
            placeholder="Describe the main purpose of the software" 
            className="styled-textarea"
          />
        </div>

        {/* Target Users */}
        <div className="form-group">
          <label>Target Users</label>
          <textarea 
            rows="3" 
            value={targetUsers} 
            onChange={(e) => setTargetUsers(e.target.value)} 
            placeholder="Who are the target users?" 
            className="styled-textarea"
          />
        </div>

        {/* Platform Preferences */}
        <div className="form-group">
          <label>Platform Preferences</label>
          <input 
            type="text" 
            value={platformPreferences} 
            onChange={(e) => setPlatformPreferences(e.target.value)} 
            placeholder="e.g., Windows, iOS, Cloud" 
            className="styled-input"
          />
        </div>

        {/* Performance Expectations */}
        <div className="form-group">
          <label>Performance Expectations</label>
          <textarea 
            rows="3" 
            value={performance} 
            onChange={(e) => setPerformance(e.target.value)} 
            placeholder="Describe performance expectations" 
            className="styled-textarea"
          />
        </div>

        {/* Security Requirements */}
        <div className="form-group">
          <label>Security Requirements</label>
          <textarea 
            rows="3" 
            value={security} 
            onChange={(e) => setSecurity(e.target.value)} 
            placeholder="Describe security requirements" 
            className="styled-textarea"
          />
        </div>

        {/* Budget Slider */}
        <div className="form-group">
          <label>Budget</label>
          <input 
            type="range" 
            min="1000" 
            max="100000" 
            value={budget} 
            onChange={(e) => setBudget(e.target.value)} 
            className="slider"
          />
          <div className="budget-display">
            <input 
              type="number" 
              value={budget} 
              onChange={(e) => setBudget(e.target.value)} 
              className="styled-input"
              min="1000"
              max="100000"
            /> 
            <span> USD</span>
          </div>
        </div>

        {/* Date Picker */}
        <div className="form-group">
          <label>Project Deadline</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
            className="date-picker"
          />
        </div>

        {/* Description Box */}
        <div className="form-group">
          <label>Additional Description</label>
          <textarea 
            rows="5" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            placeholder="Describe additional details" 
            className="styled-textarea"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </section>
  );
};

export default SoftwareForm;
