const authorizeRolesProtect = (roles) => {
    return (request, response, next) => {
        if (!roles.includes(request.user.role)) {
            return response.status(401).json({
                success: false,
                message: `User role: ${request.user.role}, is not authorized access this route`,
            });
        }

        next();
    };
};

module.exports = { authorizeRolesProtect };