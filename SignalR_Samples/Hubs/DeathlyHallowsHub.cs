using Microsoft.AspNetCore.SignalR;

namespace SignalR_Samples.Hubs
{
    public class DeathlyHallowsHub:Hub
    {
        public Dictionary<string, int> GetRaceStatus()
        {
            return SD.DealthyHallowRace;
        }
    }
}
