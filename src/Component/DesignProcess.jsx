import React, { useState, useEffect } from "react";

const WorkflowDiagram = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nodes = [
    { label: "BUSINESS\nRESEARCH", angle: 90, gridPos: { row: 0, col: 1 } },
    { label: "DESIGN REVIEW", angle: 54, gridPos: { row: 0, col: 2 } },
    { label: "USER RESEARCH", angle: 18, gridPos: { row: 1, col: 2 } },
    { label: "USER JOURNEY", angle: -18, gridPos: { row: 2, col: 2 } },
    {
      label: "INFORMATION\nARCHITECTURE",
      angle: -54,
      gridPos: { row: 2, col: 1 },
    },
    {
      label: "ACCESSIBILITY &\nINCLUSIVE DESIGN",
      angle: -90,
      gridPos: { row: 2, col: 0 },
    },
    {
      label: "USABILITY &\nA/B TESTING",
      angle: -126,
      gridPos: { row: 1, col: 0 },
    },
    { label: "BUSINESS\nSIGN-OFF", angle: -162, gridPos: { row: 0, col: 0 } },
    { label: "DESIGN\nHANDOVER & QA", angle: 162, gridPos: { row: 3, col: 0 } },
    { label: "ANALYTICS", angle: 126, gridPos: { row: 3, col: 1 } },
  ];

  const isMobile = windowWidth < 768;

  const radius = isMobile ? 120 : windowWidth < 1024 ? 180 : 300;
  const svgSize = isMobile ? 400 : windowWidth < 1024 ? 600 : 800;
  const centerX = svgSize / 2;
  const centerY = svgSize / 2;

  const getPosition = (angle) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(radian),
      y: centerY - radius * Math.sin(radian),
    };
  };

  if (isMobile) {
    // Mobile Grid Layout
    const gridConnections = [
      { from: 0, to: 1 }, // Business Research → Design Review
      { from: 1, to: 2 }, // Design Review → User Research
      { from: 2, to: 3 }, // User Research → User Journey
      { from: 3, to: 4 }, // User Journey → Information Architecture
      { from: 4, to: 5 }, // Information Architecture → Accessibility
      { from: 5, to: 6 }, // Accessibility → Usability
      { from: 6, to: 7 }, // Usability → Business Sign-off
      { from: 7, to: 8 }, // Business Sign-off → Design Handover
      { from: 8, to: 9 }, // Design Handover → Analytics
      { from: 9, to: 0 }, // Analytics → Business Research (loop back)
    ];

    return (
      <div className="bg-[#131212] py-8">
        <div className="container px-4 mx-auto">
          <h3 className="text-white text-start text-3xl font-bold mb-8">
            Our Design Process
          </h3>
        </div>
        <div className="px-4">
          <div className="relative max-w-md mx-auto">
           <div className="grid grid-cols-3 gap-4">
              {nodes.map((node, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center relative"
                  style={{
                    gridRow: node.gridPos.row + 1,
                    gridColumn: node.gridPos.col + 1,
                  }}
                >
                  <div className="bg-[#fd6f00] group active:bg-white border border-[#fd6f00] transition-colors duration-300 rounded-lg px-2 py-3 shadow-lg w-full h-[85px] flex items-center justify-center">
                    <span className="text-white group-active:text-[#fd6f00] transition-all duration-300 font-semibold text-[9px] text-center leading-tight whitespace-pre-line">
                      {node.label}
                    </span>
                  </div>
                </div>
              ))}
              </div>

            {/* Flow indicators as simple arrows between boxes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 10 }}
            >
              <defs>
                <marker
                  id="arrowhead-mobile"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="3"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3, 0 6"
                    fill="#fd6f00"
                    opacity="0.7"
                  />
                </marker>
              </defs>
              {gridConnections.map((conn, idx) => {
                const fromNode = nodes[conn.from];
                const toNode = nodes[conn.to];

                // Calculate center positions
                const fromX = (fromNode.gridPos.col + 0.5) * 33.33;
                const fromY = (fromNode.gridPos.row + 0.5) * 25;
                const toX = (toNode.gridPos.col + 0.5) * 33.33;
                const toY = (toNode.gridPos.row + 0.5) * 25;

                return (
                  <line
                    key={idx}
                    x1={`${fromX}%`}
                    y1={`${fromY}%`}
                    x2={`${toX}%`}
                    y2={`${toY}%`}
                    stroke="#fd6f00"
                    strokeWidth="2"
                    opacity="0.5"
                    markerEnd="url(#arrowhead-mobile)"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    );
  }

  // Desktop/Tablet Circular Layout
  return (
    <div className="bg-[#131212] py-8 md:py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <h3 className="text-white text-start text-4xl lg:text-[48px] font-bold mb-8">
          Our Design Process
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-5">
        <div
          className="relative w-full max-w-[600px] lg:max-w-[800px]"
          style={{ aspectRatio: "1/1" }}
        >
          {/* Circle background */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox={`0 0 ${svgSize} ${svgSize}`}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#fd6f00" />
              </marker>
            </defs>

            <circle
              cx={centerX}
              cy={centerY}
              r={radius}
              fill="none"
              stroke="#4a5568"
              strokeWidth={windowWidth < 1024 ? 75 : 100}
              opacity="0.3"
            />

            {/* Connecting lines with arrows */}
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
                  stroke="#fd6f00"
                  strokeWidth="3"
                  opacity="0.6"
                  markerEnd="url(#arrowhead)"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => {
            const pos = getPosition(node.angle);
            const percentage = {
              x: (pos.x / svgSize) * 100,
              y: (pos.y / svgSize) * 100,
            };

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${percentage.x}%`,
                  top: `${percentage.y}%`,
                }}
              >
                <div className="bg-[#fd6f00] group hover:bg-white border border-[#fd6f00] transition-colors duration-500 rounded-full px-4 py-3 lg:px-6 lg:py-4 shadow-lg min-w-[120px] lg:min-w-[140px] flex items-center justify-center">
                  <span className="text-white group-hover:text-[#fd6f00] transition-all duration-500 font-semibold text-xs lg:text-sm text-center leading-tight whitespace-pre-line">
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
