import { Home, Users, Building2, DollarSign } from "lucide-react";
import './stat-card.css'
export function StatCard(props) {
    const {
      title,
      value,
      icon,
      description,
      trend,
      className = "",
      valueClassName = "",
      iconClassName = "",
    } = props;
  
    return (
      <div className={`stat-card ${className}`}>
        <div className="stat-card-header">
          <div>
            <p className="stat-title">{title}</p>
            <h4 className={`stat-value ${valueClassName}`}>{value}</h4>
            {description && <p className="stat-description">{description}</p>}
  
            {trend && (
              <div className="stat-trend">
                <span className={`trend-value ${trend.isPositive ? "positive" : "negative"}`}>
                  {trend.isPositive ? "+" : "-"}
                  {Math.abs(trend.value)}%
                </span>
                <span className="trend-label">vs last month</span>
              </div>
            )}
          </div>
  
          {icon && (
            <div className={`stat-icon ${iconClassName}`}>
              {icon}
            </div>
          )}
        </div>
      </div>
    );
  }

  export default function DashboardCards() {
    return (
      <div className="grid-container">
        <StatCard
          title="Total Houses"
          value="24"
          icon={<Home className="stat-icon-home" />}
          iconClassName="bg-blue-100"
          trend={{ value: 10, isPositive: true }}
        />
        <StatCard
          title="Total Tenants"
          value="20"
          icon={<Users className="stat-icon-users" />}
          iconClassName="bg-violet-100"
          trend={{ value: 15, isPositive: true }}
        />
        <StatCard
          title="Vacant Units"
          value="10"
          icon={<Building2 className="stat-icon-building" />}
          iconClassName="bg-amber-100"
          trend={{ value: 5, isPositive: false }}
        />
      </div>
    );
  }
  