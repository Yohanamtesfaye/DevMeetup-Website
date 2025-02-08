function Button({ children, className = "", variant = "default", ...props }) {
    const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors"
    const variants = {
      default: "bg-indigo-600 text-white hover:bg-indigo-700",
      outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    }
  
    return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    )
  }
  
  export default Button
  
  