function Card({ children, className = "", ...props }) {
    return (
      <div className={`bg-white rounded-xl shadow-lg ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  function CardContent({ children, className = "", ...props }) {
    return (
      <div className={`p-6 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  export { Card, CardContent }
  
  