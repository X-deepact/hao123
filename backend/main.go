package main

import (
	"fmt"
	"github.com/rs/zerolog/log"
	"hao123/util"
	"os"
	"os/signal"
	"sync"
	"syscall"
)

func main() {

	config, err := util.LoadConfig(".")

	fmt.Println("config: ", config)
	fmt.Println("err: ", err)

	//NewMongoStore()
	go listenForShutdown()
}

func listenForShutdown() {
	var wg *sync.WaitGroup

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)

	<-quit
	shutdown(wg)
	os.Exit(0)
}
func shutdown(wg *sync.WaitGroup) {

	log.Info().Msg("would run clean up tasks...")

	wg.Wait()

	log.Info().Msg("closing channels and shutting down applications...")

}
