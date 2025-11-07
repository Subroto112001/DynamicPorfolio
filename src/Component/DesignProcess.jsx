import React from "react";

const WorkflowDiagram = () => {
  const nodes = [
    { label: "BUSINESS\nRESEARCH", angle: 90 },
    { label: "DESIGN REVIEW", angle: 54 },
    { label: "USER RESEARCH", angle: 18 },
    { label: "USER JOURNEY", angle: -18 },
    { label: "INFORMATION\nARCHITECTURE", angle: -54 },
    { label: "ACCESSIBILITY &\nINCLUSIVE DESIGN", angle: -90 },
    { label: "USABILITY &\nA/B TESTING", angle: -126 },
    { label: "BUSINESS\nSIGN-OFF", angle: -162 },
    { label: "DESIGN\nHANDOVER & QA", angle: 162 },
    { label: "ANALYTICS", angle: 126 },
  ];

  const radius = 240;
  const centerX = 350;
  const centerY = 350;

  const getPosition = (angle) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY - radius * Math.sin(radian),
    };
  };

    return (
      <div className="bg-[#131212]">
        <div className="container">
          <h3 className="text-white text-start text-[48px] font-bold">Our Design Process</h3>
        </div>
        <div className="flex flex-col  items-center justify-center min-h-screen  p-5">
          <div className="relative" style={{ width: "800px", height: "800px" }}>
            {/* Circle background */}
            <svg className="absolute inset-0" width="800" height="800">
              <circle
                cx={centerX}
                cy={centerY}
                r={radius}
                fill="none"
                stroke="#4a5568"
                strokeWidth="100"
                opacity="0.3"
              />

              {/* Connecting lines */}
              {nodes.map((node, index) => {
                const nextIndex = (index + 1) % nodes.length;
                const pos1 = getPosition(node.angle);
                const pos2 = getPosition(nodes[nextIndex].angle);

                return (
                  <line
                    key={`line-${index}`}
                    x1={pos1.x}
                    y1={pos1.y}
                    x2={pos2.x}
                    y2={pos2.y}
                    stroke="#4a5568"
                    strokeWidth="3"
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {nodes.map((node, index) => {
              const pos = getPosition(node.angle);

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                  }}
                >
                  <div className="bg-[#fd6f00] group hover:bg-white border border-[#fd6f00] transition-colors duration-500 rounded-full px-6 py-4 shadow-lg min-w-[140px] flex items-center justify-center">
                    <span className="text-white group-hover:text-[#fd6f00] transition-all duration-500 font-semibold text-sm text-center leading-tight whitespace-pre-line">
                      {node.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default WorkflowDiagram;
