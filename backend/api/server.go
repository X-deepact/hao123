package api

import (
	ginzerolog "github.com/dn365/gin-zerolog"
	"github.com/gin-gonic/gin"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"hao123/db"
	"hao123/util"
	"os"
)

type Server struct {
	router *gin.Engine
	store  db.Store
	config util.Config
}

func NewServer(store db.Store, config util.Config) (*Server, error) {
	server := &Server{
		store:  store,
		config: config,
	}

	server.setUpRouter()

	return server, nil
}

// Start return the HTTP api on a specific route
func (s *Server) Start(address string) error {

	return s.router.Run(address)

}

// setUpRouter setup for different HTTP methods
func (s *Server) setUpRouter() {
	router := gin.Default()

	if s.config.Environment == "development" {
		router.Use(ginzerolog.Logger("GIN"))
		log.Logger = log.Output(zerolog.ConsoleWriter{Out: os.Stderr})
	}
	//router.POST(util.CreateUser, s.createUser)

	s.router = router
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}
