package api

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

type listAllGovSitesRequest struct {
	PageID   int64 `form:"page_id" binding:"required,min=1"`
	PageSize int64 `form:"page_size" binding:"required,min=3,max=10"`
}

func (s *Server) getAllGovSites(ctx *gin.Context) {

	var req listAllGovSitesRequest

	if err := ctx.ShouldBindQuery(&req); err != nil {

		if req.PageID < 1 {

			err := errors.New("PageID must be at least 1")
			ctx.JSON(http.StatusBadRequest, errorResponse(err))
			return
		}
		if req.PageSize < 3 || req.PageSize > 20 {

			err := errors.New("PageSize must be between 3 and 20")
			ctx.JSON(http.StatusBadRequest, errorResponse(err))
			return
		}

	}
	skip := (req.PageID - 1) * req.PageSize
	limit := req.PageSize
	filter := bson.M{}

	govSites, err := s.store.GetAllGovSites(ctx, "govSites", filter, skip, limit)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
	}

	ctx.JSON(http.StatusOK, gin.H{"govSites": govSites})
}
