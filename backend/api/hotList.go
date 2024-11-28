package api

import (
	"errors"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"net/http"
)

type hotListRequest struct {
	PageID   int32 `form:"page_id" binding:"required,min=1"`
	PageSize int32 `form:"page_size" binding:"required,min=3,max=10"`
}

func (s *Server) getAllHotList(ctx *gin.Context) {
	var req listHotSearchRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {

		if req.PageID < 1 {

			err := errors.New("PageID must be at least 1")
			ctx.JSON(http.StatusBadRequest, errorResponse(err))
			return
		}
		if req.PageSize < 5 || req.PageSize > 10 {

			err := errors.New("PageSize must be between 3 and 10")
			ctx.JSON(http.StatusBadRequest, errorResponse(err))
			return
		}

	}

	filter := bson.M{}

	hotLists, err := s.store.GetAllHotList(ctx, "hotLists", filter)

	if err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
	}

	ctx.JSON(http.StatusOK, gin.H{"hotLists": hotLists})
}
